import updateEvent from "./updateEvent";

const updateFunction = async(createdEvent,id) => { 
        const update = await updateEvent(createdEvent, id)
        return update;
};

export default updateFunction;