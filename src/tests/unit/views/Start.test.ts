/**
 * @vitest-environment happy-dom
 */
import { describe, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import Start from "@/views/Start.vue";
import i18n from "@/i18n";

describe("Login", () => {
  it("renders", () => {
    const wrapper = mount(Start, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
          }),
          i18n,
        ],
      },
    });

    expect(wrapper.exists()).toBe(true);
  });
});
