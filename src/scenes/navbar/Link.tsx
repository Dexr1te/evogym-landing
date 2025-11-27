import type { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({page,selectedPage,setSelectedPage}: Props) => {

    const lowerCasePage: SelectedPage = page.toLowerCase().replace(/ /g,"") as SelectedPage;

  return (
    <AnchorLink 
        href={`#${lowerCasePage}`}
        className={`${selectedPage === lowerCasePage ? "text-[var(--primary-500)]" : " " }
        transition duration-500 hover:text-[var(--primary-500)]`}
        onClick={() => setSelectedPage(lowerCasePage)}
    >
        {page}
    </AnchorLink>
  )
}

export default Link