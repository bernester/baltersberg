<section class="section text-center mt-20 mb-8 prices">
  <div class="section-content ph-8">
    <h2 class="bakso h4 mb-4">Der passende Beitrag für alle.</h2>
    <p class="copy mb-8">
      Damit sich auch Alle die <b>Freizeit für Alle</b> leisten können, bieten wir
      drei Optionen für den Teilnahmebeitrag an.
    </p>
  </div>
  <div class="row mb-8">
    <div class="col">
      <div class="price-wrapper" style="animation-delay: 0.1s;">
        <h3 class="price-name">Normales Einkommen</h3>
        <strong class="bakso h3">240€</strong>
      </div>
    </div>
    <div class="col">
      <div class="price-wrapper">
        <h3 class="price-name">Geringes Einkommen</h3>
        <strong class="bakso h3">160€</strong>
      </div>
    </div>
    <div class="col">
      <div class="price-wrapper" style="animation-delay: 0.2s;">
        <h3 class="price-name">Ohne festes Einkommen</h3>
        <strong class="bakso h3">120€</strong>
      </div>
    </div>
  </div>
  <!-- <a href="https://tally.so/r/3EKKMN" class="btn" rel="nofollow" target="blank"
    >Jetzt anmelden</a
  > -->
</section>
<section class="section section-full bg-secondary mv-8">
  <div class="section-content p-8">
    <p class="small">
      <b>Zur Orientierung:</b>
      Ein normales Einkommen entspricht einem monatlichen Gesamt-Brutto-Einkommen
      von mindestens 4.000 EUR. Ein geringes Einkommen entspricht einem monatlichen
      Gesamt-Brutto-Einkommen von 2.000 EUR und weniger.
    </p>
  </div>
</section>

<style lang="scss">
  .prices {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @keyframes bubble {
    0% {
      border-radius: 43% 57% 65% 35% / 46% 51% 49% 54%;
    }
    33% {
      border-radius: 33% 67% 33% 67% / 68% 30% 70% 32%;
    }
    66% {
      border-radius: 36% 57% 43% / 43% 66% 34% 57%;
    }
    100% {
      border-radius: 43% 57% 65% 35% / 46% 51% 49% 54%;
    }
  }

  .price-wrapper {
    padding: 32px;
    display: flex;
    flex-direction: column-reverse;
    background-color: #fcf388;
    border-radius: 43% 57% 65% 35% / 46% 51% 49% 54%;
    animation: bubble 8s linear infinite;
  }

  .price-name {
    font-size: 14px;
  }

  .small {
    font-size: 14px;
    text-align: left;
    line-height: 1.5em;
  }
</style>
