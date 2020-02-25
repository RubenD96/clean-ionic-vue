<template>
    <div id="app">
        <ion-app>
            <ion-vue-router/>
        </ion-app>
    </div>
</template>

<style>
  /** Fix notch issues **/
  ion-navbar.toolbar.toolbar-ios.statusbar-padding,
  ion-navbar.toolbar-ios ion-title.title-ios,
  ion-toolbar.toolbar.toolbar-ios.statusbar-padding,
  ion-toolbar.toolbar-ios ion-title.title-ios {
    padding-top: constant(safe-area-inset-top);
    padding-top: env(safe-area-inset-top);
  }
</style>
