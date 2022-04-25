import { configureStore } from "@reduxjs/toolkit";
import BookmarkSlice from "../Slice/BookmarkSlice";
import ThemeSlice from "../Slice/ThemeSlice";

export default Store = configureStore({
    reducer : {
        bookmark : BookmarkSlice,
        theme : ThemeSlice
    }
})