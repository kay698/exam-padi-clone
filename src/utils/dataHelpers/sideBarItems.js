import HomeIcon from "../../assets/svgs/home.svg";
import LibraryIcon from "../../assets/svgs/library.svg";
import ReportIcon from "../../assets/svgs/report.svg";
import CBTIcon from "../../assets/svgs/cbt.svg";
import LessonIcon from "../../assets/svgs/lessons.svg";

export const SideBarItems = [
  {
    title: "Home",
    icon: HomeIcon,
    to: "/",
    subRoutes: ["/recently-viewed", "/recommended-lessons"],
  },
  {
    title: "Lessons",
    icon: LessonIcon,
    to: "/lessons",
    subRoutes: ["/lesson"],
  },
  {
    title: "CBT",
    icon: CBTIcon,
    to: "/cbt-waec",
    subRoutes: ["/cbt-sat", "/cbt-neco", "/cbt-jamb"],
  },
  {
    title: "Report",
    icon: ReportIcon,
    to: "/reports",
    subRoutes: ["/achievements", "/test-scores"],
  },
  {
    title: "Library",
    icon: LibraryIcon,
    to: "/library",
    subRoutes: ["/saved", "/downloads", "/history"],
  },
];
