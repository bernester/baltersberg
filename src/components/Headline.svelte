<script lang="ts">
  // Props to accept style type and HTML tag type
  export let style: "title" | "headline" | "sub-headline" = "headline";
  export let tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" = "h2";

  // Define TailwindCSS classes for each style type
  const styleClasses = {
    title: "text-9xl/tight font-bolle uppercase", // Example for title
    headline: "text-7xl/none font-bolle uppercase", // Example for headline
    subHeadline: "text-5xl/none font-bolle uppercase", // Example for sub-headline
  };

  // Get the appropriate class based on the styleType
  let selectedClass: string;
  $: selectedClass =
    style === "title"
      ? styleClasses.title
      : style === "headline"
        ? styleClasses.headline
        : styleClasses.subHeadline;
</script>

<!-- Use the `tag` prop to dynamically render the desired HTML tag -->
<svelte:element this={tag} class={selectedClass}>
  <slot />
</svelte:element>
