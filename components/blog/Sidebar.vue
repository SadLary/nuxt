<template>
  <aside class="blog__aside aside">
    <nav class="aside__navigation">
      <ul class="aside__list">
        <li v-for="menu in menus" :key="menu.label" class="aside__list-item">
          <nuxt-link :to="menu.url" class="aside__list-link" :class="{isActive: menu.isActive}">
            <span class="active-marker" />{{ menu.label }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  data: () => ({
    menus: [
      {
        label: 'Science and Medicine',
        url: '/',
        isActive: true
      },
      {
        label: 'Directory of varieties',
        url: '/'
      },
      {
        label: 'The use of cannabis',
        url: '/'
      },
      {
        label: 'Tips for growing',
        url: '/'
      },
      {
        label: 'Law and Policy',
        url: '/'
      },
      {
        label: 'Legalization',
        url: '/'
      },
      {
        label: 'Cooking',
        url: '/'
      },
      {
        label: 'Humor',
        url: '/'
      },
      {
        label: 'Crime',
        url: '/'
      },
      {
        label: 'Video',
        url: '/'
      },
      {
        label: 'NEWS',
        url: '/'
      }
    ]
  })
}
</script>
