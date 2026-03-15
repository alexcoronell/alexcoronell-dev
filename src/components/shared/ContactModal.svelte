<script lang="ts">
  import {
    contactModalStatus,
    languageStore,
    setContactModalStatus,
  } from "@stores/contactModal.store";
  import Loading from "@components/ui/icons/Loading.svelte";
  import SuccessIcon from "@components/ui/icons/SuccessIcon.svelte";
  import ErrorIcon from "@components/ui/icons/ErrorIcon.svelte";

  const iconSize = "w-[100px] h-[100px]";
  const loadingMessage = $derived(
    $languageStore === "en"
      ? "Sending your message..."
      : "Enviando tu mensaje...",
  );
  const successMessage = $derived(
    $languageStore === "en"
      ? "Message sent successfully"
      : "Mensaje enviado exitosamente",
  );
  const errorMessage = $derived(
    $languageStore === "en"
      ? "Error sending your message, try again"
      : "Error enviando tu mensaje, intenta otra vez",
  );
  const buttonMessage = $derived($languageStore === "en" ? "Close" : "Cerrar");
</script>

{#if $contactModalStatus !== "init"}
  <div class="ContactModal">
    <div class="ContactModal__box">
      {#if $contactModalStatus === "loading"}
        <Loading class="text-(--secondary)" size={iconSize} />
        <p class="text-(--primary)">{loadingMessage}</p>
      {:else if $contactModalStatus === "success"}
        <SuccessIcon class="text-(--primary)" size={iconSize} />
        <p class="text-(--primary)">{successMessage}</p>
      {:else if $contactModalStatus === "error"}
        <ErrorIcon class="text-(--error-color)" size={iconSize} />
        <p class="text-(--primary)">{errorMessage}</p>
      {/if}
      {#if $contactModalStatus === "success" || $contactModalStatus === "error"}
        <button
          class="btn btn-primary"
          onclick={() => setContactModalStatus("init")}
        >
          {buttonMessage}
        </button>
      {/if}
    </div>
  </div>
{/if}

<style>
  @reference "tailwindcss";
  .ContactModal {
    @apply fixed inset-0 bg-(--dark-bg)/70 backdrop-blur-3xl flex items-center justify-center z-50;
  }
  .ContactModal__box {
    @apply bg-(--dark-bg) p-4 rounded-lg w-full max-w-[350px] min-h-[300px] flex flex-col items-center justify-center gap-6 border border-(--secondary)
        md:max-w-[450px] md:min-h-[300px];
    background: linear-gradient(
      135deg,
      rgba(15, 20, 35, 0.9),
      rgba(10, 15, 25, 0.95)
    );
    box-shadow: 0 0 20px var(--secondary) / 90;
  }

  .ContactModal__loadingIcon {
    @apply w-12 h-12;
  }
</style>
