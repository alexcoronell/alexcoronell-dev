<script module lang="ts">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Form from "@components/shared/Form.svelte";

  // NOTE: Form.submit calls `sendContactMessage`, which POSTs to a live
  // backend (Google Apps Script) via `fetch`. A default render story is safe
  // because the fetch only fires on an actual submit interaction; rendering
  // alone does not trigger any network request.
  const { Story } = defineMeta({
    title: "Form/ContactForm",
    component: Form,
    args: {
      lang: "es",
    },
  });
</script>

<Story name="Default" />
