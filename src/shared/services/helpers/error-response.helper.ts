import { HttpException } from "@nestjs/common";
import { AxiosError } from "axios";
import { ResultViewModel } from "src/shared/models/interfaces/result-view.model";

export const errorResponseHelper = (error: AxiosError) => {
    const errorData = error?.response?.data;

    const resultError: ResultViewModel<null> = {
        data: null,
        status: error?.status,
        error: !errorData ? error : errorData,
        message: error?.message
    }

    throw new HttpException(resultError, error?.response?.status || 500);

}