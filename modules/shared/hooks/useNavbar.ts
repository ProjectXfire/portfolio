import { useCallback, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
// Contexts
import { UIContext } from "@/modules/shared/context";

export const useNavbar = () => {
  //******** Hooks ********/
  const router = useRouter();
  const {
    state: { menuActive, language },
    setSelectedMenu,
    setLanguage,
  } = useContext(UIContext);

  //******** Methods ********//

  const onNavigateTo = (path: string) => {
    const menuSelected = path.replace("/", "");
    sessionStorage.setItem("menu", menuSelected);
    setSelectedMenu(menuSelected);
    router.push(path);
  };

  const onChangeLanguage = (language: string) => {
    sessionStorage.setItem("language", language);
    const existUrlInLocal = sessionStorage.getItem("menu");
    if (!existUrlInLocal) {
      router.push("/", "/", { locale: language });
      return;
    }
    if (language === "en-US") {
      router.push(`/${existUrlInLocal}`, `/${existUrlInLocal}`, {
        locale: language,
      });
      return;
    }
    router.push(`/${existUrlInLocal}`, `/${existUrlInLocal}`, {
      locale: language,
    });
  };

  //******** Effects ********//

  useEffect(() => {
    const menuSelected = sessionStorage.getItem("menu");
    if (menuSelected && !menuActive) {
      setSelectedMenu(menuSelected);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const language = sessionStorage.getItem("language");
    if (language) {
      setLanguage(language);
    } else {
      setLanguage("en-US");
      sessionStorage.setItem("language", "en-US");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //******** States & actions ********//

  return {
    language,
    menuActive,
    onNavigateTo,
    onChangeLanguage,
  };
};
