import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const repository = process.env.GISCUS_REPOSITORY || 'cianortecardmaster-wq/mesa42';
const categoryPriority = ['Comentários', 'Comments', 'Announcements', 'General'];
const outputPath = path.resolve('js/giscus-config.json');

const sleep = (milliseconds) =>
  new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });

const chooseCategory = (categories) => {
  for (const preferredName of categoryPriority) {
    const category = categories.find(
      ({ name }) => name?.localeCompare(preferredName, 'pt-BR', { sensitivity: 'base' }) === 0,
    );

    if (category) return category;
  }

  return categories[0];
};

const fetchConfiguration = async () => {
  const endpoint = new URL('https://giscus.app/api/discussions/categories');
  endpoint.searchParams.set('repo', repository);

  let lastError;

  for (let attempt = 1; attempt <= 4; attempt += 1) {
    try {
      const response = await fetch(endpoint, {
        headers: {
          Accept: 'application/json',
          'User-Agent': 'mesa42-giscus-config',
        },
      });

      const body = await response.text();

      if (!response.ok) {
        throw new Error(`Giscus respondeu com status ${response.status}: ${body.slice(0, 300)}`);
      }

      const data = JSON.parse(body);
      const categories = Array.isArray(data.categories) ? data.categories : [];
      const category = chooseCategory(categories);

      if (!data.repositoryId || !category?.id || !category?.name) {
        throw new Error(
          'O Giscus não retornou o ID do repositório e uma categoria de discussão válida.',
        );
      }

      return {
        repository,
        repositoryId: data.repositoryId,
        category: category.name,
        categoryId: category.id,
      };
    } catch (error) {
      lastError = error;

      if (attempt < 4) {
        console.warn(`Tentativa ${attempt} falhou. Tentando novamente em 10 segundos...`);
        await sleep(10_000);
      }
    }
  }

  throw lastError;
};

const writeConfiguration = async (configuration) => {
  await mkdir(path.dirname(outputPath), { recursive: true });

  const nextContent = `${JSON.stringify(configuration, null, 2)}\n`;
  let currentContent = '';

  try {
    currentContent = await readFile(outputPath, 'utf8');
  } catch {
    // O arquivo ainda não existe.
  }

  if (currentContent === nextContent) {
    console.log('A configuração do Giscus já está atualizada.');
    return;
  }

  await writeFile(outputPath, nextContent, 'utf8');
  console.log(
    `Configuração gerada para ${configuration.repository}, categoria ${configuration.category}.`,
  );
};

const configuration = await fetchConfiguration();
await writeConfiguration(configuration);
