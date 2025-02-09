<script type="module">
  import { linkClasses, primaryButton } from "$lib/styles";
  import { formatDate } from "$lib/utils";
  import data from "./../data.json";
  import Headline from "./Headline.svelte";
  import RegisterButton from "./RegisterButton.svelte";
  import { Highlight, Underline } from "$lib/annotate";
</script>

<section class="max-w-screen-sm mx-auto py-8 mb-8">
  <div class="flex flex-col gap-6 items-center text-center">
    <Headline tag="h1" style="title"
      >Zeit für
      <span use:Highlight>Freizeit für Alle.</span></Headline
    >

    <p class="text-2xl/relaxed font-bold text-balance">
      Das inklusive Sommer-Zeltlager für Alle.
      <span use:Underline>
        {formatDate(data.dates.CurrentStart)} - {formatDate(
          data.dates.CurrentEnd
        )}
      </span>
    </p>

    {#if data.registrationOpen}
      <RegisterButton />
      <a href="#mehr-erfahren" class={linkClasses}>Mehr erfahren</a>
    {/if}
  </div>
</section>
