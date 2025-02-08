<script type="module">
  import { formatDate } from "$lib/utils";
  import data from "./../data.json";
  import Headline from "./Headline.svelte";
</script>

<section class="max-w-screen-sm">
  <div class="">
    <Headline tag="h1" style="title">Zeit für Freizeit für Alle.</Headline>

    <p class="text-2xl/relaxed font-bold">
      Das inklusive Sommerabenteuer für Alle.
    </p>
    <div class="text-4xl/relaxed font-bolle">
      <mark
        >{formatDate(data.dates.CurrentStart)} - {formatDate(
          data.dates.CurrentEnd
        )}</mark
      >
    </div>

    <a
      href="https://tally.so/r/3EKKMN"
      class="inline-block px-6 py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      rel="nofollow"
      target="blank">Jetzt anmelden</a
    >
  </div>
</section>
