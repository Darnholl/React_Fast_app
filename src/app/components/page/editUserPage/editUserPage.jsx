import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { validator } from "../../../utils/validator";
import TextField from "../../common/form/textField";
import SelectField from "../../common/form/selectField";
import RadioField from "../../common/form/radioField";
import MultiSelectField from "../../common/form/multiSelectField";
import BackHistoryButton from "../../common/backButton";
import { useProfessions } from "../../../hooks/useProfession";
import { useQualities } from "../../../hooks/useQualities";
import { useAuth } from "../../../hooks/useAuth";

const EditUserPage = () => {
    // const { userId } = useParams();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const { currentUser, edit } = useAuth();
    const { professions } = useProfessions();
    const { qualities } = useQualities();

    const qualForForm = transformCurrUserQual();

    const [data, setData] = useState({
        name: currentUser.name,
        email: currentUser.email,
        profession: currentUser.profession,
        sex: "male",
        qualities: qualForForm
    });
    // console.log("CU: ", currentUser);
    // console.log("qual: ", qualities);

    const [errors, setErrors] = useState({});

    function transformCurrUserQual() {
        const testUserQual = [];
        for (const qual of currentUser.qualities) {
            for (const q in qualities) {
                if (qual === qualities[q]._id) {
                    testUserQual.push({
                        value: qualities[q]._id,
                        label: qualities[q].name
                    });
                }
            }
        }
        return testUserQual;
    }

    const testProfChange = () => {
        return professions.map((p) => ({
            label: p.name,
            value: p._id
        }));
    };

    const testQualChange = () => {
        return qualities.map((q) => ({
            label: q.name,
            value: q._id
        }));
    };
    const qualArray = testQualChange();

    const getProfessionById = (id) => {
        for (const prof of testProfChange()) {
            if (prof.value === id) {
                return prof.value;
            }
        }
    };
    const getQualities = (elements) => {
        const qualitiesArray = [];
        for (const elem of elements) {
            for (const quality in qualArray) {
                if (elem.value === qualArray[quality].value) {
                    qualitiesArray.push(qualArray[quality].value);
                }
            }
        }
        return qualitiesArray;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const { profession, qualities } = data;
        // api.users
        //     .update(userId, {
        //         ...data,
        //         profession: getProfessionById(profession),
        //         qualities: getQualities(qualities)
        //     })
        //     .then((data) => history.push(`/users/${data._id}`));
        edit({
            ...data,
            profession: getProfessionById(profession),
            qualities: getQualities(qualities)
        });
        history.push(`/users/${currentUser._id}`);
        // console.log({
        //     ...data,
        //     profession: getProfessionById(profession),
        //     qualities: getQualities(qualities)
        // });
    };
    // const transformData = (data) => {
    //     return data.map((qual) => ({ label: qual.name, value: qual._id }));
    // };
    // useEffect(() => {
    //     setIsLoading(true);
    //     api.users.getById(userId).then(({ profession, qualities, ...data }) =>
    //         setData((prevState) => ({
    //             ...prevState,
    //             ...data,
    //             qualities: transformData(qualities),
    //             profession: profession._id
    //         }))
    //     );
    //     api.professions.fetchAll().then((data) => {
    //         const professionsList = Object.keys(data).map((professionName) => ({
    //             label: data[professionName].name,
    //             value: data[professionName]._id
    //         }));
    //         setProfession(professionsList);
    //     });
    //     api.qualities.fetchAll().then((data) => {
    //         const qualitiesList = Object.keys(data).map((optionName) => ({
    //             value: data[optionName]._id,
    //             label: data[optionName].name,
    //             color: data[optionName].color
    //         }));
    //         setQualities(qualitiesList);
    //     });
    // }, []);
    useEffect(() => {
        if (data._id) setIsLoading(false);
    }, [data]);

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введен некорректно"
            }
        },
        name: {
            isRequired: {
                message: "Введите ваше имя"
            }
        }
    };
    useEffect(() => {
        validate();
    }, [data]);
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
        // console.log(data);
    };
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;
    return (
        <div className="container mt-5">
            <BackHistoryButton />
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    {!isLoading && Object.keys(professions).length > 0 ? (
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Имя"
                                name="name"
                                value={data.name}
                                onChange={handleChange}
                                error={errors.name}
                            />
                            <TextField
                                label="Электронная почта"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                                error={errors.email}
                            />
                            <SelectField
                                label="Выбери свою профессию"
                                defaultOption="Choose..."
                                options={testProfChange()}
                                name="profession"
                                onChange={handleChange}
                                value={data.profession}
                                error={errors.profession}
                            />
                            <RadioField
                                options={[
                                    { name: "Male", value: "male" },
                                    { name: "Female", value: "female" },
                                    { name: "Other", value: "other" }
                                ]}
                                value={currentUser.sex}
                                name="sex"
                                onChange={handleChange}
                                label="Выберите ваш пол"
                            />
                            <MultiSelectField
                                defaultValue={data.qualities}
                                options={testQualChange()}
                                onChange={handleChange}
                                name="qualities"
                                label="Выберите ваши качества"
                            />
                            <button
                                type="submit"
                                disabled={!isValid}
                                className="btn btn-primary w-100 mx-auto"
                            >
                                Обновить
                            </button>
                        </form>
                    ) : (
                        "Loading..."
                    )}
                </div>
            </div>
        </div>
    );
};

export default EditUserPage;
