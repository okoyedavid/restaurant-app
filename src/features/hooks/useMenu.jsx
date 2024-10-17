import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { editMenu, getMenu } from "../../services/apiMenu";
import { useEffect } from "react";
import { fillMenu } from "../../store/cartActions";
import { useDispatch } from "react-redux";

function useMenu() {
  const dispatch = useDispatch();

  const { isLoading: loadingMenu, data } = useQuery({
    queryKey: ["restaurant"],
    queryFn: getMenu,
  });

  const queryclient = useQueryClient();
  const { isLoading: updating, mutate } = useMutation({
    mutationFn: ({ item, column }) => editMenu(item, column),
    onSuccess: () => {
      queryclient.invalidateQueries({
        queryKey: ["restaurant"],
      });
    },

    onError: (err) => console.error(err.message),
  });

  useEffect(() => {
    dispatch(fillMenu(data));
  }, [dispatch, data]);

  return { data, mutate, updating, loadingMenu };
}

export default useMenu;
