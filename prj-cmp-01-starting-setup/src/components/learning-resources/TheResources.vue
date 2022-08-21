<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="storedResButton"
      >Stored Resources</base-button
    >
    <base-button @click="setSelectedTab('add-resources')" :mode="addResButton"
      >Add Resource</base-button
    >
  </base-card>
  <component :is="selectedTab"></component>
</template>
<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';
export default {
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'A comprehensive guide to Vue.js',
          link: 'https://vuejs.org/v2/guide/',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'The internets source of knowledge.',
          link: 'https://www.google.com/',
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
    };
  },
  computed: {
    storedResButton() {
      return this.selectedTab === 'stored-resources' ? 'primary' : 'flat';
    },
    addResButton() {
      return this.selectedTab === 'add-resources' ? 'primary' : 'flat';
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>
