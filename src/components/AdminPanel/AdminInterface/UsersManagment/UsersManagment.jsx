import { useEffect, useState } from "react";
import { SearchInput } from "../../../common/SearchInput/SearchInput";
import { TabTitle } from "../../../common/TabTitle/TabTitle";
import { UserInfo } from "./UserInfo/UserInfo";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserList } from "../../../../store/UserSlice";
import Preloader from "../../../common/Preloader/Preloader";

const UserManagement = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    dispatch(fetchUserList(token));
  }, []);

  const [isActiveSearch, setIsActiveSearch] = useState(false);
  const userList = useSelector((state) => state.user.userList);
  const status = useSelector((state) => state.user.status);
  return (
    <>
      <TabTitle title={"Управление пользователями"} />
      {status === "pending" ? (
        <Preloader />
      ) : (
        <>
          <SearchInput
            onClick={() => {
              setIsActiveSearch(true);
            }}
            placeholder={"Поиск пользователя по имени, номеру телефона..."}
          />
          {isActiveSearch &&
            userList.map((user) => {
              return <UserInfo key={user.id} user={user} />;
            })}
        </>
      )}
    </>
  );
};

export default UserManagement;
