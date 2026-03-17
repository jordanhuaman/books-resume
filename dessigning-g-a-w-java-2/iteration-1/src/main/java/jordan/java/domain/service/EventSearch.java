package jordan.java.domain.service;

import jordan.java.domain.entity.Event;
import jordan.java.domain.vo.ParsePolicyType;

import java.util.ArrayList;
import java.util.List;

public class EventSearch {
    public List<Event> retrieveEvents(List<String> unparsedEvents, ParsePolicyType policyType){
        List<Event> parsedEvents = new ArrayList<>();
        unparsedEvents.forEach(event ->{
            parsedEvents.add(Event.parsedEvent(event, policyType));
        });
        return parsedEvents;
    }
}
