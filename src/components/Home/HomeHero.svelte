<script type="module">
  import { linkClasses } from "$lib/styles";
  import { formatDate } from "$lib/utils";
  import data from "../../data.json";
  import { Marker, Underline } from "$lib/annotate";
  import RegisterButton from "$components/Common/RegisterButton.svelte";
  import { scrollTo } from "svelte-scrolling";
</script>

<section class="max-w-screen-sm mx-auto p-8 mb-8">
  <div class="flex flex-col gap-6 items-center text-center">
    <h1 class="text-6xl/tight md:text-9xl/tight font-bolle uppercase">
      Zeit für
      <span use:Marker>Freizeit für Alle.</span>
    </h1>

    <p class="text-md/realaxed md:text-2xl/relaxed font-bold text-balance">
      Das inklusive Sommer-Zeltlager für Alle.
      <span use:Underline>
        {formatDate(data.dates.CurrentStart)} - {formatDate(
          data.dates.CurrentEnd
        )}
      </span>
    </p>

    {#if data.registrationOpen}
      <RegisterButton />
      <a
        href="mehr-erfahren"
        use:scrollTo={"mehr"}
        class={`${linkClasses}`}
        rel="presentation">Mehr erfahren</a
      >
    {/if}
  </div>
</section>
