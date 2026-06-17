<script lang="ts">
  type Props = {
    src: string;
    alt: string;
    /** Intrinsic display width in px; the image scales down on small screens. */
    width?: number;
  };

  const { src, alt, width = 480 }: Props = $props();
</script>

<figure class="flex justify-center">
  <img
    {src}
    {alt}
    style="width: {width}px"
    class="max-w-full my-8"
    loading="lazy"
    draggable="false"
  />
</figure>
