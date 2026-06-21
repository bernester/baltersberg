<script lang="ts">
  import {
    buttonDefaultClasses,
    buttonSmallClasses,
    primaryButtonClasses,
  } from "$lib/styles";
  import data from "../../data.json";

  type Props = {
    /** Render the compact geometry (used in the sticky header). */
    small?: boolean;
  };

  const { small = false }: Props = $props();
</script>

<a
  href={data.registration.participants}
  class={[
    small ? buttonSmallClasses : buttonDefaultClasses,
    primaryButtonClasses,
  ]}
  rel="nofollow noopener noreferrer"
  target="_blank"
  aria-label="Jetzt anmelden (öffnet in neuem Tab)">Jetzt anmelden</a
>
