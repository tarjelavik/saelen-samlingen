<script>
  import { onMount, onDestroy } from "svelte";
  import client from "../sanityClient";
  import imageUrlBuilder from "@sanity/image-url";
  import Mirador from "./Mirador3";

  export let image;
  export let manifest;
  export let caption;
  export let source;
  export let alt;
  /*   export let id
  export let rights */

  // Get a pre-configured url-builder from your sanity client
  const builder = imageUrlBuilder(client);

  // Then we like to make a simple function like this that gives the
  // builder an image and returns the builder for you to specify additional
  // parameters:
  function urlFor(source) {
    return builder.image(source);
  }
</script>

<style>
  figure {
    margin: 0;
    color: dimgrey;
    width: 100%;
    padding-bottom: 1em;
    display: flex;
    flex-direction: column;
    align-content: center;
  }

  figure img {
    max-height: 70vh;
    max-width: 100%;
    margin: 0 auto;
  }

  figcaption {
    text-align: center;
  }

  figcaption a {
    text-decoration: none;
  }
  .mirador {
    width: 100%;
    height: 70vh;
    position: relative;
  }
</style>

{#if manifest}
  <div>
    <div class="mirador">
      <Mirador {manifest} />
    </div>
    <p class="has-text-centered">
      <small>{source}</small>
    </p>
  </div>
{:else}
  <figure onload="setRights()">
    <img
      alt={alt ? alt : ''}
      src={urlFor(image)
        .width(1600)
        .url()} />
    <figcaption>
      <p>{caption}</p>
    </figcaption>
  </figure>
{/if}
