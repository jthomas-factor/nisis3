import type { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = S =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('⚠️ All Posts (Admin)')
        .child(S.documentList().title('All Posts').filter('_type == "post"')),

      S.listItem()
        .title('Projects Blog')
        .child(
          S.documentList()
            .title('Project Posts')
            .filter('_type == "post" && section == "projects"'),
        ),

      S.listItem()
        .title('Services Blog')
        .child(
          S.documentList()
            .title('Service Posts')
            .filter('_type == "post" && section == "services"'),
        ),

      S.listItem()
        .title('Industries Blog')
        .child(
          S.documentList()
            .title('Industry Posts')
            .filter('_type == "post" && section == "industries"'),
        ),

      S.divider(),

      S.listItem()
        .title('Leadership')
        .child(
          S.documentList().title('Leadership').filter('_type == "leadership"'),
        ),

      S.divider(),

      S.listItem()
        .title('Taxonomies')
        .child(
          S.list()
            .title('Taxonomies')
            .items([
              S.documentTypeListItem('category'),
              S.documentTypeListItem('industry'),
              S.documentTypeListItem('service'),
            ]),
        ),
    ]);
