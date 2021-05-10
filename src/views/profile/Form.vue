<template>

  <div class="md:flex content-center flex-wrap">
    <div class="md:flex md:w-4/12 lg:w-3/12 px-2 py-2">
      <div class="md:flex-1 p-4 rounded shadow-lg bg-white border-b border-r border-grey-dark">
        <h3 class="text-lg font-medium leading-6 text-gray-900">Olá, Mestre Pokémon</h3>
        <p class="mt-1 text-sm text-gray-600 justify-center">
          O <b>Pikachu</b> foi o escolhido como símbolo da sua personalidade.
        </p>
        <p class="mt-2 text-sm text-gray-600">
          A partir de agora, você estará protegido de todas as ameaças!
        </p>
        <div class="flex mt-8 items-center justify-center object-contain">
          <img class="p-2" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg" />
        </div>
      </div>
    </div>

    <div class="md:flex md:w-8/12 lg:w-9/12 px-2 py-2">
      <div class="md:flex-1 p-4 rounded shadow-lg bg-white border-b border-r border-grey-dark">
        <form class="w-full" @submit.prevent="handleSubmit()">
          <div class="flex flex-wrap -mx-3 mb-3">
            <div class="w-full md:w-4/12 px-3 mb-6 md:mb-0">
              <BaseInput
                  id="code"
                  name="code"
                  label="CPF/CNPJ"
                  class="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  v-model="form.code.$value"
                  :errors="form.code.$errors"
                  @blur="form.code.$onBlur()"
              />
            </div>
            <div class="w-full md:w-8/12 px-3 mb-6 md:mb-0">
              <BaseInput
                id="name"
                name="name"
                label="Nome completo"
                type="text"
                class="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                v-model="form.name.$value"
                :errors="form.name.$errors"
                @blur="form.name.$onBlur()"
              />
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-3">
            <div class="w-full md:w-4/12 px-3 mb-6 md:mb-0">
              <BaseInput
                  id="birth"
                  name="birth"
                  label="Nascimento"
                  class="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  v-model="form.birth.$value"
                  :errors="form.birth.$errors"
                  @blur="form.birth.$onBlur()"
              />
            </div>
            <div class="w-full md:w-4/12 px-3 mb-6 md:mb-0">
              <BaseInput
                  id="phone"
                  name="phone"
                  label="Telefone"
                  class="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  v-model="form.phone.$value"
                  :errors="form.phone.$errors"
                  @blur="form.phone.$onBlur()"
              />
            </div>
            <div class="w-full md:w-4/12 px-3 mb-6 md:mb-0">
              <BaseInput
                  id="money"
                  name="money"
                  label="Saldo"
                  class="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  v-model="form.money.$value"
                  :errors="form.money.$errors"
                  @blur="form.money.$onBlur()"
              />
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-3">
            <div class="w-full px-3 mb-6 md:mb-0">
              <BaseInput
                id="email"
                name="email"
                label="E-mail"
                type="email"
                class="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                v-model="form.email.$value"
                :errors="form.email.$errors"
                @blur="form.email.$onBlur()"
              />
            </div>
          </div>

          <div class="px-4 py-3 text-right sm:px-6">
            <button class="mr-4 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
              Registrar
            </button>
          </div>

        </form>
      </div>
    </div>
  </div>
</template>

  <script lang="ts">
    import BaseInput from "../../components/BaseImput.vue";
    import { useValidation, ValidationError } from "vue3-form-validation";
    import apiProfile from "../../services/api/local/profile"
    import { ref, reactive } from "vue"

    export default {
      components: {
        BaseInput
      },
      data() {
        return {
          profile: {},
        }
      },
      setup() {
        const {
          form,
          errors,
          submitting,
          validateFields,
          resetFields
        } = useValidation({
          id: {
            $value: 1,
          },
          code: {
            $value: "",
            $rules: [
              name => !name && "CPF/CNPJ obrigatório!",
              name => {
                const regex = /^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})$/g;
                if (!regex.test(name)) {
                  return "CPF/CNPJ inválido";
                }
              }
            ]
          },
          name: {
            $value: "",
            $rules: [
              name => !name && "Nome completo obrigatório!"
            ]
          },
          birth: {
            $value: "",
            $rules: [
              name => !name && "Data obrigatória!",
              name => {
                const regex = /^[0-9]{2}[\/]{1}[0-9]{2}[\/]{1}[0-9]{4}$/g;
                if (!regex.test(name)) {
                  return "Data inválida";
                }
              }
            ]
          },
          phone: {
            $value: "",
            $rules: [
              name => !name && "Telefone obrigatório!",
              name => {
                const regex = /^\(\d{2}\)\s9?\d{4}-\d{4}$/g;
                if (!regex.test(name)) {
                  return "Telefone inválido";
                }
              }
            ]
          },
          money: {
            $value: "",
            $rules: [
              name => !name && "Saldo obrigatório!",
              name => {
                const regex = /\d+/g;
                if (!regex.test(name)) {
                  return "Valor R$ inválido";
                }
              }
            ]
          },
          email: {
            $value: "",
            $rules: [
              email => !email && "E-mail obrigatório!",
              email => {
                const regex = /\S+@\S+\.\S+/;
                if (!regex.test(email)) {
                  return "Este e-mail é inválido";
                }
              }
            ]
          },
        });

        const handleSubmit = async () => {
          try {
            const form = await validateFields();
            alert(JSON.stringify(form, null, 2));
          } catch (e) {
            if (e instanceof ValidationError) {
              console.log(e.message);
            }
          }
        };

        return {
          form,
          errors,
          submitting,
          handleSubmit,
          resetFields
        };
      },
    };
</script>