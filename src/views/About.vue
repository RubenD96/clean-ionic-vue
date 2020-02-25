<template>
    <div class="ion-page">
        <ion-header>
            <ion-toolbar>
                <ion-title>About</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <AboutMessage msg="This is a component"/>
        </ion-content>
    </div>
</template>

<script>
    import AboutMessage from "../components/AboutMessage";

    export default {
        components: {AboutMessage}
    }
</script>
