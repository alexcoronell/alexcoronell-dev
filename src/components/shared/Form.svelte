<script lang="ts">
  import Input from "./Input.svelte";
  import TextArea from "./TextArea.svelte";
  import type { ContactMessage } from "@/core/interfaces";
  import { emailValidator } from "@/core/validators";
  import { sendContactMessage } from "@/core/utils";
  import {
    setLanguage,
    setContactModalStatus,
  } from "@/stores/contactModal.store";

  const { lang = "es" } = $props();

  let message = $state<ContactMessage>({
    fullname: "",
    email: "",
    message: "",
  });

  let errors = $state({
    fullname: "",
    email: "",
    message: "",
  });

  const validateFullname = () => {
    if (!message.fullname.trim()) {
      errors.fullname =
        lang === "es" ? "El nombre es requerido" : "Fullname is required";
    } else if (message.fullname.trim().length < 3) {
      errors.fullname =
        lang === "es"
          ? "El nombre debe tener al menos 3 caracteres"
          : "Fullname must have at least 3 characters";
    } else {
      errors.fullname = "";
    }
  };

  const validateEmail = () => {
    const email = message.email.trim();
    if (email.length === 0) {
      errors.email =
        lang === "es" ? "El email es requerido" : "Email is required";
      return;
    } else if (!emailValidator(email)) {
      errors.email =
        lang === "es" ? "El email es inválido" : "Email is invalid";
    } else {
      errors.email = "";
    }
  };

  const validateForm = () => {
    validateFullname();
    validateEmail();
    if (errors.fullname || errors.email) {
      return false;
    }
    return true;
  };

  const resetForm = () => {
    message.fullname = "";
    message.email = "";
    message.message = "";
    errors = {
      fullname: "",
      email: "",
      message: "",
    };
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    setLanguage(lang as "es" | "en");
    if (!validateForm()) return;
    setContactModalStatus("loading");
    sendContactMessage(message)
      .then(() => {
        setContactModalStatus("success");
        resetForm();
      })
      .catch(() => {
        setContactModalStatus("error");
      })
      .finally(() => {
        setTimeout(() => {
          setContactModalStatus("init");
        }, 3000);
      });
  };

  const getLabel = () => {
    if (lang === "es") {
      return {
        fullname: "Nombre Completo",
        email: "Correo electrónico",
        message: "Mensaje",
      };
    }
    return {
      fullname: "Fullname",
      email: "Email",
      message: "Message",
    };
  };
</script>

<form class="Form" onsubmit={(e) => handleSubmit(e)}>
  <Input
    name="fullname"
    type="text"
    classes="col-span-2 2xl:col-span-4"
    label={getLabel().fullname}
    validator={validateFullname}
    placeholder="John Doe"
    bind:value={message.fullname}
    error={errors.fullname}
  />
  <Input
    name="email"
    type="email"
    label={getLabel().email}
    classes="2xl:col-span-2"
    placeholder="email@example.com"
    validator={validateEmail}
    bind:value={message.email}
    error={errors.email}
  />
  <TextArea
    name="message"
    label={getLabel().message}
    classes="col-span-2 2xl:col-span-4"
    rows={8}
    placeholder={null}
    bind:value={message.message}
  ></TextArea>
  <div class="Form__buttonArea">
    <button
      class="btn btn-primary"
      aria-label={lang === "es" ? "Enviar mensaje" : "Send message"}
    >
      {lang === "es" ? "Enviar mensaje" : "Send message"}
    </button>
  </div>
</form>

<style>
  @reference "tailwindcss";
  .Form {
    @apply w-full max-w-[400px] mx-auto xl:max-w-[600px];
  }

  .Form__buttonArea {
    @apply flex items-center justify-center;
  }
</style>
