<template>
    <div>
        <Header />
        <HeadingContent content = "Welcome to your hunt!" />
    </div>
</template>

<script>
  export default {
    middleware: 'auth'
  }
</script>