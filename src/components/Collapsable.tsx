import React, { FC, PropsWithChildren, useState } from "react";

interface CollapsableProps {
	title: string;
}

const Collapsable: FC<PropsWithChildren<CollapsableProps>> = ({
	title,
	children,
}) => {
	const [collapsed, setCollapsed] = useState<boolean>(true);
	const handleCollapse = () => {
    setCollapsed(!collapsed);
	};

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
				className="flex flex-row items-center justify-between pt-8 duration-500 border-b-2 cursor-pointer hover:px-5"
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
