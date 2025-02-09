<script type="module">
  import data from "./../data.json";
  import { formatDate } from "$lib/utils";
  import Headline from "./Headline.svelte";
</script>

<section class="max-w-screen-sm mx-auto py-8 mb-8">
  <div>
    <Headline>Die Freizeit auf einen Blick.</Headline>
    <div class="grid grid-cols-3 gap-8">
      <dl>
        <dt>Dauer:</dt>
        <dd>Das Zeltlager dauert 10 Tage</dd>
      </dl>
      <dl>
        <dt>Anreise:</dt>
        <dd>{formatDate(data.dates.CurrentStart)} ab 11 Uhr</dd>
      </dl>
      <dl>
        <dt>Abreise:</dt>
        <dd>{formatDate(data.dates.CurrentEnd)} ab 11 Uhr</dd>
      </dl>
      <dl>
        <dt>Addresse:</dt>
        <dd>Zeltplatz am Buchweiher, Buch 4, 88260 Argenbühl</dd>
      </dl>
      <dl>
        <dt>Teilnehmende:</dt>
        <dd>32 Kinder und Jugendliche</dd>
      </dl>
      <dl>
        <dt>Alter:</dt>
        <dd>10 bis 15 Jahre</dd>
      </dl>
    </div>
  </div>
</section>
