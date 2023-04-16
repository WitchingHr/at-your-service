import React, { Dispatch, FC, PropsWithChildren, useState, useEffect } from "react";

interface CollapsableProps {
	title: string;
  active: string | null;
  setActive: Dispatch<React.SetStateAction<string | null>>;
}

const Collapsable: FC<PropsWithChildren<CollapsableProps>> = ({
	title,
  active,
  setActive,
	children,
}) => {
	const [collapsed, setCollapsed] = useState<boolean>(true);
	const handleCollapse = () => {
    if (active !== title) {
      setActive(title);
    }
    setCollapsed(!collapsed);
	};

  useEffect(() => {
    if (title !== active) {
      setCollapsed(true);
    }
  }, [active]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      setCollapsed(!collapsed);
    }
  }

	const style = collapsed ? "max-h-0 opacity-0 py-0" : "max-h-80 opacity-1 mt-5 py-4";
  const triangleStyle = collapsed ? "rotate-90" : "rotate-180";

	return (
		<div>
			<div
				tabIndex={0}
        role="button"
				onClick={handleCollapse}
        onKeyDown={(e) => handleKeyDown(e)}
				className="flex flex-row items-center justify-between pt-8 duration-700 border-b-2 cursor-pointer hover:px-5"
			>
				<div className="flex flex-row items-center gap-3">
          <div className={`duration-300 text-sm ` + triangleStyle}>▲</div>
          <div className="text-lg">{title}</div>
        </div>
				<div className="text-xl">{collapsed ? "+" : "-"}</div>
			</div>
			<div className={`px-7 text-lg rounded-md faq-shadow bg-white overflow-hidden duration-500 ` + style }>{children}</div>
		</div>
	);
};

export default Collapsable;
