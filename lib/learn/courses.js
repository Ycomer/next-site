const courses = [
  {
    id: 'basics',
    name: 'Basics',
    lessons: [
      {
        id: 'create-and-deploy',
        name: 'Create and Deploy a Next.js App',
        steps: [
          {
            id: 'setup',
            points: 30
          },
          {
            id: 'welcome-to-nextjs',
            points: 20
          },
          {
            id: 'deploying-nextjs',
            points: 20
          },
          {
            id: 'editing-the-page',
            points: 20
          },
          {
            id: 'develop-preview-ship',
            points: 10
          }
        ]
      },
      {
        id: 'navigate-between-pages',
        name: 'Navigate Between Pages',
        steps: [
          {
            id: 'setup',
            points: 5
          },
          {
            id: 'pages-in-nextjs',
            points: 10
          },
          {
            id: 'link-component',
            points: 15
          },
          {
            id: 'client-side',
            points: 10
          }
        ]
      },
      {
        id: 'assets-metadata-css',
        name: 'Assets, Metadata, and CSS',
        steps: [
          {
            id: 'setup',
            points: 5
          },
          {
            id: 'assets',
            points: 10
          },
          {
            id: 'metadata',
            points: 10
          },
          {
            id: 'css-styling',
            points: 10
          },
          {
            id: 'layout-component',
            points: 25
          },
          {
            id: 'global-styles',
            points: 25
          },
          {
            id: 'styling-tips',
            points: 15
          }
        ]
      },
      {
        id: 'markdown-metadata',
        name: 'Markdown and Metadata',
        steps: [
          {
            id: 'setup',
            points: 5
          },
          {
            id: 'post-layout',
            points: 15
          },
          {
            id: 'update-config',
            points: 10
          },
          {
            id: 'add-mdx',
            points: 10
          },
          {
            id: 'title-tag',
            points: 10
          },
          {
            id: 'index-page',
            points: 10
          }
        ]
      },
      {
        id: 'fetching-data-for-pages',
        name: 'Fetching Data for Pages',
        steps: [
          {
            id: 'setup',
            points: 5
          },
          {
            id: 'fetching-batman-shows',
            points: 30
          },
          {
            id: 'only-on-the-server',
            points: 5
          },
          {
            id: 'fetching-data-for-pages',
            points: 25
          },
          {
            id: 'fetch-data-in-client-side',
            points: 5
          },
          {
            id: 'finally',
            points: 5
          }
        ]
      },
      {
        id: 'dynamic-routing',
        name: 'Dynamic Routing',
        steps: [
          {
            id: 'setup',
            points: 5
          },
          {
            id: 'blog-posts',
            points: 15
          },
          {
            id: 'history-awareness',
            points: 5
          },
          {
            id: 'finally',
            points: 5
          }
        ]
      },
      {
        id: 'api-routes',
        name: 'API Routes',
        steps: [
          {
            id: 'setup',
            points: 5
          },
          {
            id: 'creating-an-api-route',
            points: 20
          },
          {
            id: 'fetching-api-routes',
            points: 10
          },
          {
            id: 'middlewares',
            points: 25
          },
          {
            id: 'finally',
            points: 5
          }
        ]
      },
      {
        id: 'deploying-a-nextjs-app',
        name: 'Deploying a Next.js App',
        steps: [
          {
            id: 'setup',
            points: 5
          },
          {
            id: 'deploying-to-zeit-now',
            points: 15
          },
          {
            id: 'deploying-to-your-own-environment',
            points: 5
          },
          {
            id: 'build-and-start',
            points: 10
          },
          {
            id: 'run-two-instances',
            points: 20
          },
          {
            id: 'build-once-run-many-instances',
            points: 5
          },
          {
            id: 'finally',
            points: 5
          }
        ]
      }
    ]
  },
  {
    id: 'excel',
    name: 'Excel',
    lessons: [
      {
        id: 'static-html-export',
        name: 'Export into a Static HTML App',
        steps: [
          {
            id: 'setup',
            points: 5
          },
          {
            id: 'export-the-index-page',
            points: 20
          },
          {
            id: 'only-the-index-page',
            points: 5
          },
          {
            id: 'exporting-other-pages',
            points: 25
          },
          {
            id: 'no-need-to-build-always',
            points: 15
          },
          {
            id: 'show-page-is-already-there',
            points: 5
          },
          {
            id: 'deploying-the-app',
            points: 5
          },
          {
            id: 'thats-it',
            points: 5
          }
        ]
      },
      {
        id: 'typescript',
        name: 'TypeScript',
        steps: [
          {
            id: 'setup',
            points: 25
          },
          {
            id: 'home-page',
            points: 20
          },
          {
            id: 'page-types',
            points: 10
          },
          {
            id: 'finally',
            points: 5
          }
        ]
      },
      {
        id: 'amp',
        name: 'Create AMP Pages',
        steps: [
          {
            id: 'amp-only',
            points: 5
          },
          {
            id: 'hybrid-amp',
            points: 5
          }
        ]
      },
      {
        id: 'automatic-static-optimization',
        name: 'Automatic Static Optimization',
        steps: [
          {
            id: 'setup',
            points: 20
          },
          {
            id: 'static-build',
            points: 5
          },
          {
            id: 'ssr',
            points: 15
          },
          {
            id: 'serverless',
            points: 15
          },
          {
            id: 'finally',
            points: 5
          }
        ]
      }
    ]
  }
];

export default courses;
