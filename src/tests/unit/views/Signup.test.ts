/**
 * @vitest-environment happy-dom
 */
import { describe, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import Signup from "@/views/Signup.vue";
import i18n from "@/i18n";

describe("Signup", () => {
  const wrapper = mount(Signup, {
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vi.fn,
        }),
        i18n,
      ],
    },
  });

  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("has terms of service link", () => {
    expect(wrapper.find("#terms-link").exists()).toBe(true);
    expect(wrapper.find("#terms-link").text()).toBe("Terms & Services");
  });
});
