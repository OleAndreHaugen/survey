result.data = await entities.survey_form.findOne({ id: req.query.id });
complete();
