import React from "react";
import "./Navbar.css";
import { IoClose } from "react-icons/io5";
import { TbFileInvoice } from "react-icons/tb";
import { CiClock2 } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {

  function openMenu(e) {
    const menu = e.target.querySelector(".nav-sublist");
    const listIcon = e.target.querySelector("p > svg");
    if (menu.style.display === "none") {
      listIcon.style.transform = "rotate(180deg)";
      menu.style.display = "block";
    } else {
      listIcon.style.transform = "rotate(360deg)";
      menu.style.display = "none";
    }
  }

  function closeMenu() {
    document.getElementById("navbar").classList.remove("show");
  }

	return (
		<nav id="navbar">
			<div id="nav-header">
				<img
					src="http://web.archive.org/web/20221117021711im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7caaf7feb674_logo%20copy.svg"
					alt="Bonsai logo"
				/>
				<IoClose id="close-menu-icon" onClick={closeMenu} />
			</div>
			<ul className="nav-list">
				<li onClick={e => openMenu(e)}>
					<p>Product <IoIosArrowDown className="list-arrow-icon" /></p>
					<ul className="nav-sublist">
						<li>
							<h3>Bonsai Workflow</h3>
							<p>Organize your business & look professional</p>
						</li>
						<li>
							<h3>Bonsai Tax</h3>
							<p>Maximize write-offs, and estimate and save for 1099 taxes</p>
						</li>
						<li>
							<h3>Bonsai Cash</h3>
							<p>Manage your money with a no-fee business account</p>
						</li>
					</ul>
				</li>
				<li onClick={e => openMenu(e)}>
					<p>Templates <IoIosArrowDown className="list-arrow-icon" /></p>
					<ul className="nav-sublist">
						<li>
							<TbFileInvoice />
							Contract Templates
						</li>
						<li>
							<TbFileInvoice />
							Proposal Templates
						</li>
						<li>
							<TbFileInvoice />
							Invoice Templates
						</li>
						<li>
							<TbFileInvoice />
							Agreement Templates
						</li>
						<li>
							<TbFileInvoice />
							Quote Templates
						</li>
						<li>
							<CiClock2 />
							Scope of Work Templates
						</li>
					</ul>
				</li>
				<li>Pricing</li>
				<li>Reviews</li>
			</ul>
			<ul className="nav-sign">
				<li>LOG IN</li>
				<li>START FREE</li>
			</ul>
		</nav>
	);
};

export default Navbar;
