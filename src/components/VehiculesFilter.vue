<template>
  <a-dropdown :trigger="['click']">
    <a class="ant-dropdown-link" @click.prevent>
      Type de véhicule
      <DownOutlined />
    </a>
    <template #overlay>
      <a-menu>
        <a-menu-item key="0">
          <a href="http://www.alipay.com/">{{vehiculeType}}</a>
        </a-menu-item>
        <a-menu-item key="1">
          <a href="http://www.taobao.com/">{{vehiculeType}}</a>
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item key="3">{{vehiculeType}}</a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>

  <a-dropdown :trigger="['click']">
    <a class="ant-dropdown-link" @click.prevent>
      Click me
      <DownOutlined />
    </a>
    <template #overlay>
      <a-menu>
        <a-menu-item key="0">
          <a href="http://www.alipay.com/">Voitures</a>
        </a-menu-item>
        <a-menu-item key="1">
          <a href="http://www.taobao.com/">Motos</a>
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item key="3">Utilitaires</a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>

  <a-dropdown :trigger="['click']">
    <a class="ant-dropdown-link" @click.prevent>
      Click me
      <DownOutlined />
    </a>
    <template #overlay>
      <a-menu>
        <a-menu-item key="0">
          <a href="http://www.alipay.com/">Voitures</a>
        </a-menu-item>
        <a-menu-item key="1">
          <a href="http://www.taobao.com/">Motos</a>
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item key="3">Utilitaires</a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>

  <a-dropdown :trigger="['click']">
    <a class="ant-dropdown-link" @click.prevent>
      Click me
      <DownOutlined />
    </a>
    <template #overlay>
      <a-menu>
        <a-menu-item key="0">
          <a href="http://www.alipay.com/">Voitures</a>
        </a-menu-item>
        <a-menu-item key="1">
          <a href="http://www.taobao.com/">Motos</a>
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item key="3">Utilitaires</a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script>
export default {
  props: {
    vehiculeType: {
      type: String,
      required: false
    }
  },

  computed: {
    vehiculeTypeFilter() {
      if (this.vehiculeType == "car") {

      }
    }
  }
};
</script>