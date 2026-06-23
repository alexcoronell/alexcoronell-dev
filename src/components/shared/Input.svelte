<script lang="ts">
  import type { FullAutoFill } from "svelte/elements";

  let {
    name,
    type = "text",
    label,
    placeholder,
    classes = "",
    error = "",
    value = $bindable(""),
    autocomplete = null,
    validator = undefined,
    required = false,
  }: {
    name: string;
    type?: string;
    label: string;
    placeholder: string | null;
    classes?: string;
    error?: string;
    value?: string | number;
    autocomplete?: FullAutoFill | null;
    validator?: (() => any) | undefined;
    required?: boolean;
  } = $props();
</script>

<div class={`form-group ${classes}`.trim()}>
  <label for={name}>{label}</label>
  <input
    style={error !== "" ? "border-color: #e7000b;" : ""}
    {type}
    {name}
    id={name}
    {placeholder}
    bind:value
    onchange={validator}
    oninput={validator}
    onkeyup={validator}
    onblur={validator}
    aria-label={placeholder}
    aria-invalid={error !== ""}
    aria-describedby={`${name}-error`}
    aria-required={required}
    {autocomplete}
  />
  <p
    aria-live="polite"
    id={`${name}-error`}
    role="alert"
    aria-hidden={error === "" ? "false" : "true"}
    class="form-group__error"
  >
    {error}
  </p>
</div>
