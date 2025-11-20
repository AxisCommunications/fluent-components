import { render } from "@testing-library/react";
import { act } from "react";
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

  it("should render standard initials", async () => {
    const { findByTestId } = render(
      <TopBar
        profileMenu={{
          name: "Super User",
          email: "super.user@axis.com",
          language: { onChange: () => {}, value: "en" },
          theme: { onChange: () => {}, value: "dark" },
          onSignOut: () => {},
        }}
      />
    );

    const profileMenuButton = await findByTestId("profile-menu-button");
    expect(profileMenuButton).toHaveTextContent("SU");

    act(() => {
      profileMenuButton.click();
    });
    const profileMenuPersona = await findByTestId("profile-menu-persona");
    expect(profileMenuPersona).toHaveTextContent(
      "SUSuper Usersuper.user@axis.com"
    );
  });

  it("should render custom initials", async () => {
    const { findByTestId } = render(
      <TopBar
        profileMenu={{
          name: "Super User",
          email: "super.user@axis.com",
          initials: "XY",
          language: { onChange: () => {}, value: "en" },
          theme: { onChange: () => {}, value: "dark" },
          onSignOut: () => {},
        }}
      />
    );

    const profileMenuButton = await findByTestId("profile-menu-button");
    expect(profileMenuButton).toHaveTextContent("XY");
    act(() => {
      profileMenuButton.click();
    });
    const profileMenuPersona = await findByTestId("profile-menu-persona");
    expect(profileMenuPersona).toHaveTextContent(
      "XYSuper Usersuper.user@axis.com"
    );
  });
});
