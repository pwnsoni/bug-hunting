<template>
    <div id="centerdParentDiv">
            <div id="childDivWith60">
            <b-form @submit="onSubmit" >
                <b-form-group
                    id="input-group-1"
                    label-for="input-1"
                >
                    <div v-for="i in formData" :key="i" id="formComp"> 
                        <div v-if="i.inputType == 'text'">
                            <label for="datePicker">{{i.fieldName}}</label>
                            <b-form-input
                                id="input-1"
                                v-model=formDataResult[i.key]
                                :placeholder=i.fieldName
                                required
                            >   
                            </b-form-input>
                        </div>

                        <div v-if="i.inputType == 'text-area'">
                            <label for="datePicker">{{i.fieldName}}</label>
                            <b-form-textarea 
                                id="textarea"
                                v-model=formDataResult[i.key]
                                placeholder="Enter something..."
                                rows="6"
                                max-rows="60"
                            >
                            </b-form-textarea>
                        </div>

                        <div v-if="i.inputType == 'date'">
                            <label for="datePicker">{{i.fieldName}}</label>
                            <b-form-datepicker 
                                id="datePicker"
                                v-model=formDataResult[i.fieldName]
                                class="mb-2"
                                >
                            </b-form-datepicker>
                        </div>


                    </div>
                </b-form-group>
                <div id="centerThisDiv">
                    <button type="submit" id="submitButton" v-if="show">Submit</button>
                </div>
                <ButtonSpinner v-if="spin"/>
            </b-form>
        </div>

    </div>
</template>


<script>
export default {
    computed: {
        formData(){
            return this.$store.state.loginForm;
        } 
    },
    data() {
        return {
            show: true,
            formDataResult:{},
            spin: false
        }
    },
    methods: {
        async onSubmit(event) {
            event.preventDefault()
            this.spin = true;
            this.show = false;
            try{
                await this.$store.dispatch('INITIATE_SESSION', this.formDataResult)
                this.$router.push('/projects')
                this.$store.dispatch('TOAST', {body: `You are logged in successfuly!`, purpose: '-- Yayy --'})
            }catch(e){
                this.$store.dispatch('TOAST', {body: e.message, purpose: '!! Error !!'})
                this.$router.push('/login')
                this.spin = false;
                this.show = true;
            }
        },
    }
}
</script>

<style>

    #centerThisDiv{
        display: flex;
        justify-content: center;
        padding: 2px;
    }

    #submitButton{
        background-color: #dad4e6;
        color: #17141d;
        border: none;
        padding: 15px 32px;
        margin: 2%;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        width: 50%;
        transition: 0.6s;
    }

    #submitButton:hover{
        background-color: #17141d; /* Green */
        color: #dad4e6;
    }

    #childDivWith60{
        width: 60%;
        border: 5px solid rgb(249, 247, 247);
        border-radius: 2px;
        padding: 2%;
    }

    #centerdParentDiv{
        display: flex;
        justify-content: center;
        padding: 5%;
    }

    #formComp{
        margin-top: 5%;
    }

</style>