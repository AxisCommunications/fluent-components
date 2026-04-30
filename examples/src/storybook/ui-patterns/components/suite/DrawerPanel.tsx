import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  Button,
  Divider,
  Input,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import { DismissRegular, SearchRegular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  root: {
    width: "320px",
    height: "100%",
    backgroundColor: "#f5f5f5",
    display: "grid",
    gridTemplateRows: "68px 1fr 72px",
    ...{
      borderRight: `1px solid ${tokens.colorNeutralStroke2}`,
    },
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    ...{
      padding: "24px 16px 12px 24px",
    },
  },
  title: {
    fontSize: tokens.fontSizeHero700,
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: "28px",
  },
  body: {
    ...{
      padding: "0 12px",
    },
    display: "grid",
    alignContent: "start",
    rowGap: "10px",
  },
  footer: {
    position: "relative",
    ...{
      padding: "16px 24px 24px",
    },
  },
  footerDivider: {
    marginBottom: "10px",
  },
});

const sections = [
  "Data Hub",
  "Pipelines",
  "Notebooks",
  "Lakehouses",
  "Reports",
];

export function DrawerPanel() {
  const styles = useStyles();

  return (
    <section className={styles.root}>
      <div className={styles.header}>
        <h2 className={styles.title}>Sites</h2>
        <Button
          appearance="subtle"
          icon={<DismissRegular fontSize={16} />}
          aria-label="Close drawer"
        />
      </div>

      <div className={styles.body}>
        <Input
          contentBefore={<SearchRegular fontSize={16} />}
          placeholder="Search"
        />
        <Accordion collapsible>
          {sections.map((section) => (
            <AccordionItem key={section} value={section}>
              <AccordionHeader>{section}</AccordionHeader>
              <AccordionPanel>{section} content</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className={styles.footer}>
        <Divider className={styles.footerDivider} />
        <Button appearance="primary">Primary</Button>
      </div>
    </section>
  );
}
