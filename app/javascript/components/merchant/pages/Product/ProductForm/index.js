import React, { useState, forwardRef,useImperativeHandle } from "react";

import { Box, Grid, Stack } from "@mui/material";

import MainForm from "./MainForm";
import MiscFrom from "./MiscForm";
import VariantForm from "./VariantForm";

const ProductForm = forwardRef((props, ref) => {

    // const { title } = props;
    // product attributes
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tagList, setTagList] = useState("");
    const [ingredientList, setIngredientList] = useState("");
    const [productTypeList, setProductTypeList] = useState("");
    const [status, setStatus] = useState("draft");
    const [images, setImages] = useState([]);

    // variant attributes
    const [variantTitle, setVariantTitle] = useState("");
    const [variantDescription, setVariantDescription] = useState("");
    const [variantWeight, setVariantWeight] = useState("");
    const [variantWeightUnit, setVariantWeightUnit] = useState("");
    const [variantInventoryQuantity, setVariantInventoryQuantity] = useState(0);
    const [variantPrice, setVariantPrice] = useState("");
    const [variantIngredientList, setVariantIngredientList] = useState("");
    const [variantImages, setVariantImages] = useState([]);

    // variant options attributes
    const [variantOptionTitle, setVariantOptionTitle] = useState("");
    const [variantOptionValueList, setVariantOptionValueList] = useState("");


    const styles = {
        box: {
            display: "block",
            width: "80%",
            margin: "auto"
        }
    }

    useImperativeHandle(
        ref,
        () => ({
            getFormBody() {
                return {
                    title, description,
                    tag_list: tagList,
                    ingredient_list: ingredientList,
                    product_type_list: productTypeList,
                    images: images
                }
            }
        }),
    );

    const getMainAttributes = () => {
        return {
            title, description,
            images
        }
    }

    const getMainCallbacks = () => {
        return {
            setTitle, setDescription, 
            setImages
        }
    }

    const getMiscAttibutes = () => {
        return {
            status, tagList, 
            ingredientList, productTypeList
        }
    }

    const getMiscCallbacks = () => {
        return {
            setStatus, setTagList,
            setIngredientList, setProductTypeList,
        }
    }

    const getVariantAttributes = () => {
        return {
            variantTitle, variantDescription, variantWeight,
            variantWeightUnit, variantInventoryQuantity, variantPrice,
            variantIngredientList, variantImages,
            variantOptionTitle, variantOptionValueList
        }
    }

    const getVariantCallbacks = () => {
        return {
            setVariantTitle, setVariantDescription, setVariantWeight,
            setVariantWeightUnit, setVariantInventoryQuantity,
            setVariantPrice, setVariantIngredientList,
            setVariantImages,
            setVariantOptionTitle, setVariantOptionValueList
        }
    }

    return (
        <Box style={styles.box}>
            <Grid 
                container
                spacing={2}
            >
                <Grid 
                    item
                    xs={12}
                    md={12}
                    lg={8}
                >
                    <Stack>
                        <MainForm 
                            attributes={getMainAttributes()}
                            callbacks={getMainCallbacks()}
                        />
                        <VariantForm 
                            attributes={getVariantAttributes()}
                            callbacks={getVariantCallbacks()}
                        />
                    </Stack>
                </Grid>
                <Grid 
                    item
                    xs={12}
                    md={12}
                    lg={4}
                >
                    <Stack>
                        <MiscFrom 
                            attributes={getMiscAttibutes()}
                            callbacks={getMiscCallbacks()}
                        />
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
});

export default ProductForm;
