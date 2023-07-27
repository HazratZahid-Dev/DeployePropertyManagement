import React from "react";
import img from "../Images/th.jpg";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  borderRadius:10,
  border:0,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 5,
  p: 4,
};

const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="flex justify-between bg-black text-white py-3">
      <div className="flex items-center w-[70%] gap-x-3 list-none px-2">
        <div className="w-12 h-9 rounded-full ">
          <img src={img} className="rounded-lg h-full w-full object-cover" />
        </div>
        <div className="flex gap-x-4">
          <li>
            <Link to="/" className="font-semibold text-lg">
              Individual
            </Link>
          </li>
          <li>
            <Link to="/" className="font-semibold text-lg">
              Agencies
            </Link>
          </li>
        </div>
      </div>
      <div className="w-[30%] flex gap-x-6  justify-end px-3">
        <button
          type="button"
          onClick={handleOpen}
          className="border-2 border-green-500 hover:bg-green-500 px-5 py-1 rounded-sm font-semibold"
        >
          SignIn
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className='h-[90%]'>
            <div>
              <div class="gradient-form h-ful  ">
                <div class="container h-[90%] ">
                  <div class="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800">
                    <div class="w-full">
                      <div class="block rounded-lg dark:bg-neutral-800">
                        <div class="g-0 lg:flex lg:flex-wrap">
                          <div class="px-4 md:px-0 lg:w-full">
                            <div class="md:mx-6 md:p-12">
                              <div class="text-center">
                                <img
                                  class="mx-auto w-32 "
                                  src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                  alt="logo"
                                />
                                <h4 class="mb-12 mt-1 pb-1 text-xl font-semibold">
                                  We are The Wise360 Team
                                </h4>
                              </div>

                              <form>
                                <p class="mb-4">Please login to your account</p>
                                <div
                                  class="relative mb-4"
                                
                                >
                                  <input
                                    type="text"
                                    className="border rounded-md outline-none w-full py-1 px-2"
                                    placeholder="Username"
                                  />
                              
                                </div>

                                <div
                                  class="relative mb-4"
                                >
                                   <input
                                    type="text"
                                    className="border rounded-md outline-none w-full py-1 px-2"
                                    placeholder="Password"
                                  />
                                </div>

                                <div class="mb-12 pb-1 pt-1 text-center">
                                  <button
                                    // id="exampleFormControlInput1"
                                    class="mb-3 bg-[#53AF50] inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                    type="button"
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                    // style={{ backgroundImage: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }}   
                                                                   >
                                    Log in
                                  </button>

                                </div>

                                <div class="flex items-center justify-between pb-6">
                                  <p class="mb-0 mr-2">
                                    Don't have an account?
                                  </p>
                                  <button
                                    type="button"
                                    class="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                  >
                                    Register
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>

                          {/* <div
                            class="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                            style={{ backgroundImage: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }}
                          >
                            <div class="px-4 py-6 text-white md:mx-6 md:p-12">
                              <h4 class="mb-6 text-xl font-semibold">
                                We are more than just a company
                              </h4>
                              <p class="text-sm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                              </p>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <button
          type="button"
          className="border-2 border-green-500 px-5 hover:bg-green-500 py-1 rounded-sm font-semibold"
        >
          SignUp
        </button>
      </div>
    </div>
  );
};

export default NavBar;
{
  /* {!showMore && products.length > 10 && (
        <div className="flex justify-end px-5 py-3">
          <button
            type="button"
            className="px-4 py-1 border bg-green-500 text-white font-semibold flex justify-end"
            onClick={handleShowMore}
          >
            More
          </button>
        </div>
      )} */
}
