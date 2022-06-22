<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <router-link class="navbar-brand" :to="{ name: 'home' }"
          >SHOPPING</router-link
        >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              class="nav-link"
              aria-current="page"
              :to="{ name: 'home' }"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'about' }"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'products' }"
              >Products</router-link
            >
          </li>
        </ul>
        <div class="d-flex">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item" v-if="!user">
              <router-link class="nav-link" :to="{ name: 'login' }"
                >Login</router-link
              >
            </li>
            <li class="nav-item" v-if="!user">
              <router-link class="nav-link" :to="{ name: 'register' }"
                >Register</router-link
              >
            </li>

            <li class="nav-item dropdown" style="padding-right: 40px">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                v-if="user"
              >
                Profile
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <router-link class="dropdown-item" :to="{ name: 'profile' }"
                    >Profile</router-link
                  >
                </li>
                <li>
                  <router-link class="dropdown-item" :to="{ name: 'carts' }"
                    >Carts</router-link
                  >
                </li>
                <li>
                  <router-link class="dropdown-item" :to="{ name: 'logout' }"
                    >Sign Out</router-link
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { useUser } from "@/composables/useUser";
export default {
  setup() {
    const { getUser } = useUser();
    const { user } = getUser();

    return { user };
  },
};
</script>

<style></style>
