<script module lang="ts">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import ContactModal from "@components/shared/ContactModal.svelte";
  import { setContactModalStatus } from "@stores/contactModal.store";

  const { Story } = defineMeta({
    title: "Modal/ContactModal",
    component: ContactModal,
    parameters: {
      // The modal reads a shared global store; reset it once mounted so
      // switching stories does not leave it in a stale state.
      layout: "fullscreen",
    },
  });
</script>

{#snippet loading()}
  {setContactModalStatus("loading")}
  <ContactModal />
{/snippet}

{#snippet success()}
  {setContactModalStatus("success")}
  <ContactModal />
{/snippet}

{#snippet error()}
  {setContactModalStatus("error")}
  <ContactModal />
{/snippet}

<Story name="Loading" template={loading} />
<Story name="Success" template={success} />
<Story name="Error" template={error} />
