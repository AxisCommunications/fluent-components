import { makeStyles } from "@fluentui/react-components";
import {
  CameraRegular,
  FullScreenMaximizeRegular,
  FullScreenMinimizeRegular,
  OptionsRegular,
  PauseFilled,
  PlayFilled,
  RatioOneToOneRegular,
  RecordRegular,
  RectangleLandscapeRegular,
  SettingsRegular,
  StorageRegular,
  WeatherMoonRegular,
} from "@fluentui/react-icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useCallback, useRef, useState } from "react";
import {
  VideoControlBar,
  type VideoControlBarGroup,
} from "../components/composites/VideoControlBar";

/**
 * Squares the bar so it docks flush under the feed. Uses the same `borderRadius`
 * property as the component's root class, so `mergeClasses` deterministically
 * keeps this override.
 */
const useDockedStyles = makeStyles({
  bar: {
    borderRadius: 0,
  },
});

/**
 * Public, royalty-free sample streams used as a realistic live-view backdrop.
 * Two sources are provided so the browser can fall back if one is unavailable.
 */
const SAMPLE_VIDEO_SOURCES = [
  "https://media.w3.org/2010/05/sintel/trailer.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
];

/**
 * An officially-published, curated 24/7 public webcam (Kristianstad Stora Torg,
 * Skåne, Sweden) served as a YouTube live stream. Used only as a realistic
 * backdrop; a cross-origin YouTube embed cannot be driven by the control bar,
 * so the controls in that story are presentational.
 * Source: https://www.youtube.com/watch?v=v7wWIO7brSM
 */
const LIVE_FEED_EMBED =
  "https://www.youtube-nocookie.com/embed/v7wWIO7brSM?autoplay=1&mute=1&controls=0&playsinline=1&rel=0&enablejsapi=1";

/**
 * Builds the leading (left) groups shown in the Figma anatomy:
 * play, snapshot, a segmented record + storage cluster, IR light, and
 * on-screen controls.
 */
function buildStartGroups(): VideoControlBarGroup[] {
  return [
    {
      key: "playback",
      items: [
        {
          key: "play",
          label: "Start stream / pause stream",
          icon: <PlayFilled />,
        },
      ],
    },
    {
      key: "snapshot",
      items: [
        { key: "snapshot", label: "Take a snapshot", icon: <CameraRegular /> },
      ],
    },
    {
      key: "record-cluster",
      segmented: true,
      items: [
        {
          key: "record",
          label: "Start recording",
          icon: <RecordRegular />,
          tone: "danger",
        },
        { key: "storage", label: "Select storage", icon: <StorageRegular /> },
      ],
    },
    {
      key: "ir",
      items: [{ key: "ir", label: "IR light", icon: <WeatherMoonRegular /> }],
    },
    {
      key: "osd",
      items: [
        { key: "osd", label: "Onscreen controls", icon: <OptionsRegular /> },
      ],
    },
  ];
}

/**
 * Builds the trailing (right) groups shown in the Figma anatomy:
 * live-view settings menu, and a segmented resolution / framing cluster.
 */
function buildEndGroups(): VideoControlBarGroup[] {
  return [
    {
      key: "settings",
      items: [
        {
          key: "settings",
          label: "Live view settings",
          icon: <SettingsRegular />,
          hasMenu: true,
          menuItems: [
            { key: "quality", label: "Stream quality" },
            { key: "overlay", label: "Overlay settings" },
            { key: "rotation", label: "Image rotation" },
          ],
        },
      ],
    },
    {
      key: "view-cluster",
      segmented: true,
      items: [
        { key: "resolution", label: "Full resolution", text: "1:1" },
        {
          key: "expand",
          label: "Expanded live view",
          icon: <RectangleLandscapeRegular />,
        },
        {
          key: "fullscreen",
          label: "Full screen",
          icon: <FullScreenMaximizeRegular />,
        },
      ],
    },
  ];
}

/**
 * Video Control Bar
 *
 * A toolbar of grouped icon controls for a live video feed. Controls are split
 * into leading (`start`) and trailing (`end`) groups; related controls can be
 * `segmented` to sit behind a shared background separated by vertical dividers.
 * Every control exposes a tooltip and an `aria-label`, and the root renders as
 * a `toolbar` landmark.
 *
 * The `media` appearance is a dark scrim intended to overlay a video stream,
 * while `subtle` is a theme-aware bar for placement on a page surface.
 *
 * <p align="right"><a href="https://www.figma.com/design/0kVLp2qecBWQiQXEQidCeJ/Axis-Global-components?node-id=355-420"><img width="240" src="./figma-global-components-cover.svg" alt="Open in Figma — AXIS Fluent Global components" /></a></p>
 */
const meta: Meta<typeof VideoControlBar> = {
  title: "UI patterns/Video Control Bar",
  component: VideoControlBar,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    appearance: {
      control: "inline-radio",
      options: ["media", "subtle"],
      description:
        "`media` renders a dark scrim for overlaying a video feed; `subtle` renders a theme-aware bar for page surfaces.",
      table: { type: { summary: '"media" | "subtle"' } },
    },
    ariaLabel: {
      control: "text",
      description: "Accessible name for the toolbar landmark.",
      table: { type: { summary: "string" } },
    },
    start: {
      control: false,
      description: "Groups aligned to the leading (left) edge.",
      table: { type: { summary: "VideoControlBarGroup[]" } },
    },
    end: {
      control: false,
      description: "Groups aligned to the trailing (right) edge.",
      table: { type: { summary: "VideoControlBarGroup[]" } },
    },
    className: {
      control: false,
      table: { type: { summary: "string | undefined" } },
    },
  },
  args: {
    appearance: "media",
    ariaLabel: "Video controls",
    start: buildStartGroups(),
    end: buildEndGroups(),
  },
};

export default meta;
type Story = StoryObj<typeof VideoControlBar>;

/**
 * The full control bar as a dark scrim, matching the Figma anatomy.
 */
export const Default: Story = {};

/**
 * The bar overlaid on the bottom of a live-view frame — its intended
 * production context.
 */
export const OverVideo: Story = {
  parameters: {
    layout: "fullscreen",
    fitContent: true,
    docs: {
      description: {
        story:
          "Positioned along the bottom edge of a real video stream, the `media` appearance floats above the feed. The controls are wired to the video element: play/pause, IR (night) mode, recording state, and full screen all work.",
      },
    },
  },
  render: (args) => {
    const OverVideoDemo = () => {
      const containerRef = useRef<HTMLDivElement>(null);
      const videoRef = useRef<HTMLVideoElement>(null);
      const [playing, setPlaying] = useState(false);
      const [recording, setRecording] = useState(false);
      const [nightMode, setNightMode] = useState(false);
      const [fullscreen, setFullscreen] = useState(false);

      const togglePlay = useCallback(() => {
        const video = videoRef.current;
        if (!video) {
          return;
        }
        if (video.paused) {
          void video.play();
          setPlaying(true);
        } else {
          video.pause();
          setPlaying(false);
        }
      }, []);

      const toggleFullscreen = useCallback(() => {
        const container = containerRef.current;
        if (!container) {
          return;
        }
        if (document.fullscreenElement) {
          void document.exitFullscreen();
          setFullscreen(false);
        } else {
          void container.requestFullscreen();
          setFullscreen(true);
        }
      }, []);

      const start: VideoControlBarGroup[] = [
        {
          key: "playback",
          items: [
            {
              key: "play",
              label: playing ? "Pause stream" : "Start stream",
              icon: playing ? <PauseFilled /> : <PlayFilled />,
              active: playing,
              onClick: togglePlay,
            },
          ],
        },
        {
          key: "snapshot",
          items: [
            {
              key: "snapshot",
              label: "Take a snapshot",
              icon: <CameraRegular />,
            },
          ],
        },
        {
          key: "record-cluster",
          segmented: true,
          items: [
            {
              key: "record",
              label: recording ? "Stop recording" : "Start recording",
              icon: <RecordRegular />,
              tone: "danger",
              active: recording,
              onClick: () => setRecording((value) => !value),
            },
            {
              key: "storage",
              label: "Select storage",
              icon: <StorageRegular />,
            },
          ],
        },
        {
          key: "ir",
          items: [
            {
              key: "ir",
              label: "IR light",
              icon: <WeatherMoonRegular />,
              active: nightMode,
              onClick: () => setNightMode((value) => !value),
            },
          ],
        },
        {
          key: "osd",
          items: [
            {
              key: "osd",
              label: "Onscreen controls",
              icon: <OptionsRegular />,
            },
          ],
        },
      ];

      const end: VideoControlBarGroup[] = [
        {
          key: "settings",
          items: [
            {
              key: "settings",
              label: "Live view settings",
              icon: <SettingsRegular />,
              hasMenu: true,
              menuItems: [
                { key: "quality", label: "Stream quality" },
                { key: "overlay", label: "Overlay settings" },
                { key: "rotation", label: "Image rotation" },
              ],
            },
          ],
        },
        {
          key: "view-cluster",
          segmented: true,
          items: [
            { key: "resolution", label: "Full resolution", text: "1:1" },
            {
              key: "expand",
              label: "Expanded live view",
              icon: <RectangleLandscapeRegular />,
            },
            {
              key: "fullscreen",
              label: fullscreen ? "Exit full screen" : "Full screen",
              icon: fullscreen ? (
                <FullScreenMinimizeRegular />
              ) : (
                <FullScreenMaximizeRegular />
              ),
              active: fullscreen,
              onClick: toggleFullscreen,
            },
          ],
        },
      ];

      return (
        <div
          ref={containerRef}
          style={{
            position: "relative",
            width: "100%",
            height: 480,
            overflow: "hidden",
            backgroundColor: "#000",
            display: "block",
            lineHeight: 0,
          }}
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              filter: nightMode ? "grayscale(1) brightness(1.3)" : undefined,
              transition: "filter 200ms ease",
            }}
          >
            {SAMPLE_VIDEO_SOURCES.map((source) => (
              <source key={source} src={source} type="video/mp4" />
            ))}
            <track kind="captions" />
          </video>

          {recording ? (
            <div
              style={{
                position: "absolute",
                top: 16,
                left: 16,
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "4px 10px",
                borderRadius: 4,
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                color: "#fff",
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "#e00",
                }}
              />
              REC
            </div>
          ) : null}

          <div
            style={{
              position: "absolute",
              left: 12,
              right: 12,
              bottom: 12,
            }}
          >
            <VideoControlBar {...args} start={start} end={end} />
          </div>
        </div>
      );
    };

    return <OverVideoDemo />;
  },
};

/**
 * The bar overlaid on a real, officially-published public webcam feed.
 */
export const OverLiveFeed: Story = {
  parameters: {
    layout: "fullscreen",
    fitContent: true,
    docs: {
      description: {
        story:
          "Overlaid on a real, officially-published public webcam — Kristianstad Stora Torg (Skåne, Sweden), a curated 24/7 YouTube live stream. Playback (play/pause), IR (night) mode, recording state, and full screen are wired to the feed via the YouTube IFrame Player API, so the controls drive the embed even though it is cross-origin.",
      },
    },
  },
  render: (args) => {
    const OverLiveFeedDemo = () => {
      const containerRef = useRef<HTMLDivElement>(null);
      const iframeRef = useRef<HTMLIFrameElement>(null);
      const [playing, setPlaying] = useState(true);
      const [recording, setRecording] = useState(false);
      const [nightMode, setNightMode] = useState(false);
      const [fullscreen, setFullscreen] = useState(false);

      // Cross-origin YouTube embeds can't be driven through the DOM, but the
      // IFrame Player API accepts JSON commands over postMessage when the embed
      // is loaded with `enablejsapi=1`.
      const postCommand = useCallback((func: string) => {
        iframeRef.current?.contentWindow?.postMessage(
          JSON.stringify({ event: "command", func, args: [] }),
          "*"
        );
      }, []);

      const togglePlay = useCallback(() => {
        setPlaying((value) => {
          const next = !value;
          postCommand(next ? "playVideo" : "pauseVideo");
          return next;
        });
      }, [postCommand]);

      const toggleFullscreen = useCallback(() => {
        const container = containerRef.current;
        if (!container) {
          return;
        }
        if (document.fullscreenElement) {
          void document.exitFullscreen();
          setFullscreen(false);
        } else {
          void container.requestFullscreen();
          setFullscreen(true);
        }
      }, []);

      const start: VideoControlBarGroup[] = [
        {
          key: "playback",
          items: [
            {
              key: "play",
              label: playing ? "Pause stream" : "Start stream",
              icon: playing ? <PauseFilled /> : <PlayFilled />,
              active: playing,
              onClick: togglePlay,
            },
          ],
        },
        {
          key: "snapshot",
          items: [
            {
              key: "snapshot",
              label: "Take a snapshot",
              icon: <CameraRegular />,
            },
          ],
        },
        {
          key: "record-cluster",
          segmented: true,
          items: [
            {
              key: "record",
              label: recording ? "Stop recording" : "Start recording",
              icon: <RecordRegular />,
              tone: "danger",
              active: recording,
              onClick: () => setRecording((value) => !value),
            },
            {
              key: "storage",
              label: "Select storage",
              icon: <StorageRegular />,
            },
          ],
        },
        {
          key: "ir",
          items: [
            {
              key: "ir",
              label: "IR light",
              icon: <WeatherMoonRegular />,
              active: nightMode,
              onClick: () => setNightMode((value) => !value),
            },
          ],
        },
        {
          key: "osd",
          items: [
            {
              key: "osd",
              label: "Onscreen controls",
              icon: <OptionsRegular />,
            },
          ],
        },
      ];

      const end: VideoControlBarGroup[] = [
        {
          key: "settings",
          items: [
            {
              key: "settings",
              label: "Live view settings",
              icon: <SettingsRegular />,
              hasMenu: true,
              menuItems: [
                { key: "quality", label: "Stream quality" },
                { key: "overlay", label: "Overlay settings" },
                { key: "rotation", label: "Image rotation" },
              ],
            },
          ],
        },
        {
          key: "view-cluster",
          segmented: true,
          items: [
            { key: "resolution", label: "Full resolution", text: "1:1" },
            {
              key: "expand",
              label: "Expanded live view",
              icon: <RectangleLandscapeRegular />,
            },
            {
              key: "fullscreen",
              label: fullscreen ? "Exit full screen" : "Full screen",
              icon: fullscreen ? (
                <FullScreenMinimizeRegular />
              ) : (
                <FullScreenMaximizeRegular />
              ),
              active: fullscreen,
              onClick: toggleFullscreen,
            },
          ],
        },
      ];

      return (
        <div
          ref={containerRef}
          style={{
            position: "relative",
            width: "100%",
            height: 480,
            overflow: "hidden",
            backgroundColor: "#000",
            display: "block",
            lineHeight: 0,
          }}
        >
          <iframe
            ref={iframeRef}
            title="Kristianstad Stora Torg live webcam"
            src={LIVE_FEED_EMBED}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: 0,
              // Scale the 16:9 embed up so the letterboxing is cropped by the
              // container's overflow, mimicking an object-fit: cover feed.
              transform: "scale(1.35)",
              transformOrigin: "center",
              filter: nightMode ? "grayscale(1) brightness(1.3)" : undefined,
              transition: "filter 200ms ease",
            }}
          />

          <div
            style={{
              position: "absolute",
              top: 16,
              left: 16,
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "4px 10px",
              borderRadius: 4,
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              color: "#fff",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.04em",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#e00",
              }}
            />
            {recording ? "REC · KRISTIANSTAD" : "LIVE · KRISTIANSTAD"}
          </div>

          <div
            style={{
              position: "absolute",
              left: 12,
              right: 12,
              bottom: 12,
            }}
          >
            <VideoControlBar {...args} start={start} end={end} />
          </div>
        </div>
      );
    };

    return <OverLiveFeedDemo />;
  },
};

/**
 * The bar docked directly beneath the feed as an attached control strip,
 * rather than floating over the video.
 */
export const BelowFeed: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Docked flush under the video as a single player unit — the feed and the `media` bar share one rounded frame with no gap between them. The bar's top corners are squared via the `className` prop (the component merges consumer classes last, so no component change is needed). Play/pause is wired to the video element.",
      },
    },
  },
  render: (args) => {
    const BelowFeedDemo = () => {
      const dockedStyles = useDockedStyles();
      const videoRef = useRef<HTMLVideoElement>(null);
      const [playing, setPlaying] = useState(false);

      const togglePlay = useCallback(() => {
        const video = videoRef.current;
        if (!video) {
          return;
        }
        if (video.paused) {
          void video.play();
        } else {
          video.pause();
        }
      }, []);

      const start: VideoControlBarGroup[] = [
        {
          key: "playback",
          items: [
            {
              key: "play",
              label: playing ? "Pause stream" : "Start stream",
              icon: playing ? <PauseFilled /> : <PlayFilled />,
              active: playing,
              onClick: togglePlay,
            },
          ],
        },
        {
          key: "snapshot",
          items: [
            {
              key: "snapshot",
              label: "Take a snapshot",
              icon: <CameraRegular />,
            },
          ],
        },
        {
          key: "record-cluster",
          segmented: true,
          items: [
            {
              key: "record",
              label: "Start recording",
              icon: <RecordRegular />,
              tone: "danger",
            },
            {
              key: "storage",
              label: "Select storage",
              icon: <StorageRegular />,
            },
          ],
        },
      ];

      return (
        <div
          style={{
            width: "100%",
            maxWidth: 960,
            margin: "0 auto",
            borderRadius: 8,
            overflow: "hidden",
            backgroundColor: "#000",
            lineHeight: 0,
          }}
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            style={{
              width: "100%",
              height: 380,
              objectFit: "cover",
              display: "block",
            }}
          >
            {SAMPLE_VIDEO_SOURCES.map((source) => (
              <source key={source} src={source} type="video/mp4" />
            ))}
            <track kind="captions" />
          </video>

          <VideoControlBar
            {...args}
            start={start}
            end={buildEndGroups()}
            className={dockedStyles.bar}
          />
        </div>
      );
    };

    return <BelowFeedDemo />;
  },
};

/**
 * The theme-aware `subtle` appearance for placement on a page surface.
 */
export const Subtle: Story = {
  args: {
    appearance: "subtle",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Use `subtle` when the bar sits on a page surface rather than over a video feed. Colors follow the active theme.",
      },
    },
  },
};

/**
 * A trimmed configuration with only the essential playback controls.
 */
export const Minimal: Story = {
  args: {
    start: [
      {
        key: "playback",
        items: [
          {
            key: "play",
            label: "Start stream / pause stream",
            icon: <PlayFilled />,
          },
          {
            key: "snapshot",
            label: "Take a snapshot",
            icon: <CameraRegular />,
          },
        ],
      },
    ],
    end: [
      {
        key: "view",
        items: [
          {
            key: "fullscreen",
            label: "Full screen",
            icon: <FullScreenMaximizeRegular />,
          },
        ],
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "Only play, snapshot, and full-screen — groups and items are entirely data-driven, so the bar scales down to just what a view needs.",
      },
    },
  },
};

/**
 * Interactive example wiring up toggle state for play/pause and recording.
 */
export const Interactive: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "The `active` flag drives a persistent highlight and `aria-pressed`. Here it toggles the play/pause icon and the recording state.",
      },
    },
  },
  render: (args) => {
    const InteractiveBar = () => {
      const [playing, setPlaying] = useState(false);
      const [recording, setRecording] = useState(false);

      const start: VideoControlBarGroup[] = [
        {
          key: "playback",
          items: [
            {
              key: "play",
              label: playing ? "Pause stream" : "Start stream",
              icon: playing ? <PauseFilled /> : <PlayFilled />,
              active: playing,
              onClick: () => setPlaying((value) => !value),
            },
          ],
        },
        {
          key: "record-cluster",
          segmented: true,
          items: [
            {
              key: "record",
              label: recording ? "Stop recording" : "Start recording",
              icon: <RecordRegular />,
              tone: "danger",
              active: recording,
              onClick: () => setRecording((value) => !value),
            },
            {
              key: "storage",
              label: "Select storage",
              icon: <StorageRegular />,
            },
          ],
        },
      ];

      return <VideoControlBar {...args} start={start} />;
    };

    return <InteractiveBar />;
  },
};

/**
 * Resolution and framing controls, isolated to show a segmented cluster.
 */
export const SegmentedCluster: Story = {
  args: {
    start: [
      {
        key: "view-cluster",
        segmented: true,
        items: [
          { key: "resolution", label: "Full resolution", text: "1:1" },
          {
            key: "expand",
            label: "Expanded live view",
            icon: <RectangleLandscapeRegular />,
            active: true,
          },
          {
            key: "fullscreen",
            label: "Full screen",
            icon: <FullScreenMaximizeRegular />,
          },
        ],
      },
    ],
    end: [
      {
        key: "resolution-menu",
        items: [
          {
            key: "resolution-menu",
            label: "Resolution",
            icon: <RatioOneToOneRegular />,
            hasMenu: true,
            menuItems: [
              { key: "full", label: "Full resolution (1:1)" },
              { key: "fit", label: "Fit to window" },
            ],
          },
        ],
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "A `segmented` group clusters related controls behind one background with vertical dividers. The right-hand control shows the chevron menu variant.",
      },
    },
  },
};
