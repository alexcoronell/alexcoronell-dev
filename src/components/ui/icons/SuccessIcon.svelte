<script lang="ts">
  interface Props {
    class?: string;
    size?: string;
  }

  let { class: className = "", size = "w-6 h-6" }: Props = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="20"
  height="20"
  viewBox="0 0 20 20"
  class="{size} {className}"
>
  <path
    fill="currentColor"
    d="M10 20a10 10 0 0 1 0-20a10 10 0 1 1 0 20m-2-5l9-8.5L15.5 5L8 12L4.5 8.5L3 10z"
  />
</svg>
