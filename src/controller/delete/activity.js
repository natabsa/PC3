import Activity from "../../model/activity.js";

// File for function controlling delete operations to the database

export async function delAtv(req, res) {
    try {
        res.status(200).json(await Activity.findByIdAndDelete(req.params.id));
    } catch (error) {
        console.error(error.toString());
        res.status(500).json({
            Error: "Fail trying to delete activity document",
        });
    }
}
