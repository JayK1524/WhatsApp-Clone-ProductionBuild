import React from "react";
import { Box, InputBase, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";

const Component = styled(Box)`
	background: #fff;
	height: 45px;
	display: flex;
	align-items: center;
	border-bottom: 1px solid #f2f2f2;
`;
const Wrapper = styled(Box)`
	position: relative;
	border-radius: 10px;
	background-color: #f0f2f5;
	margin: 0 12px;
	width: 86%;
`;
const Icon = styled(Box)`
	color: #919191;
	padding: 5px;
	margin-left: 5px;
	height: 100%;
	position: absolute;
`;
const InputText = styled(InputBase)`
	width: 100%;
	padding: 16px;
	padding-left: 65px;
	font-size: 14px;
	height: 15px;
`;

const Search = ({ setText }) => {
	return (
		<Component>
			<Wrapper>
				<Icon>
					<SearchIcon />
				</Icon>
				<InputText
					placeholder="Search or start new chat"
					onChange={(e) => setText(e.target.value)}
				/>
			</Wrapper>
			<FilterListRoundedIcon />
		</Component>
	);
};

export default Search;
