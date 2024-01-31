import { render } from "@testing-library/react";
import React from "react";
import { TopBar } from "./top-bar";

describe("Topbar", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<TopBar />);

    expect(baseElement).toBeTruthy();
  });

  it("should render application menu when drawer is not set", async () => {
    const { findByTestId } = render(
      <TopBar
        appMenu={{
          onChange: () => {
            return;
          },
          value: "1",
        }}
      />
    );

    const appMenuButton = await findByTestId("application-menu-trigger");
    console.log(appMenuButton);
    expect(appMenuButton).toBeTruthy();
  });

  it("should render application drawer", async () => {
    const { findByTestId } = render(
      <TopBar
        appDrawer={{
          applicationId: "id",
          title: <>Title</>,
          onChange: () => {
            return;
          },
        }}
      />
    );

    const appMenuButton = await findByTestId("application-drawer-trigger");
    expect(appMenuButton).toBeTruthy();
  });

  it("application drawer takes precedence over application menu", async () => {
    const { findByTestId } = render(
      <TopBar
        appMenu={{
          onChange: () => {
            return;
          },
          value: "1",
        }}
        appDrawer={{
          applicationId: "id",
          title: <>Title</>,
          onChange: () => {
            return;
          },
        }}
      />
    );

    const appMenuButton = await findByTestId("application-drawer-trigger");
    expect(appMenuButton).toBeTruthy();
  });
});
