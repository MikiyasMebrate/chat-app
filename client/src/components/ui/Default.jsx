import pattern05 from "../../assets/bg-pattern/pattern-05.png";
import ChatHeader from "./ChatHeader";
import Message from "./Message";

const Default = ({ data }) => {
  return (
    <>
      <div
        className="user-chat w-100 overflow-hidden"
        style={{ background: `url(${pattern05})` }}
      >
        {data?.length > 0 && (
          <div className="position-absolute top-50 start-50 translate-middle bg-secondary rounded-pill">
            <p className="p-3 pb-0 text-light">
              {" "}
              Select a Chat to start messaging!{" "}
            </p>
          </div>
        )}

        {!data?.length > 0 && (
          <div class="chat-content d-lg-flex">
            <div class="w-100 overflow-hidden position-relative">
             <ChatHeader />
             <Message />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Default;
